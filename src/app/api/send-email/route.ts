// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, formType } = body;

    console.log('Datos recibidos:', { name, email, subject, formType });

    // Validar campos requeridos
    if (!name || !message) {
      return NextResponse.json(
        { error: 'Nombre y mensaje son requeridos' },
        { status: 400 }
      );
    }

    // Verificar variables de entorno
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Variables de entorno SMTP faltantes');
      return NextResponse.json(
        { error: 'Configuración SMTP no encontrada' },
        { status: 500 }
      );
    }

    console.log('Configurando transportador SMTP...');

    // Configurar transportador SMTP para Hostinger
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false, // false para puerto 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Opciones adicionales para Hostinger
      tls: {
        rejectUnauthorized: false
      }
    });

    console.log('Verificando conexión SMTP...');

    // Verificar conexión SMTP
    try {
      await transporter.verify();
      console.log('Conexión SMTP exitosa');
    } catch (error) {
      console.error('Error en conexión SMTP:', error);
      return NextResponse.json(
        { error: 'Error de configuración SMTP' },
        { status: 500 }
      );
    }

    // Personalizar contenido según el tipo de formulario
    const getEmailContent = () => {
      switch (formType) {
        case 'registration':
          return {
            subject: subject || `Nuevo registro: ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #004D85; border-bottom: 2px solid #0077B6; padding-bottom: 10px;">
                  ${subject || `Nuevo registro: ${name}`}
                </h2>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                  <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${message}</pre>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                  Email de contacto: ${email || 'No proporcionado'}<br>
                  Fecha: ${new Date().toLocaleString('es-EC')}
                </p>
              </div>
            `
          };
        
        default:
          return {
            subject: subject || `Nuevo mensaje de ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #004D85;">Nuevo mensaje desde el sitio web</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email || 'No proporcionado'}</p>
                <p><strong>Mensaje:</strong></p>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px;">
                  <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${message}</pre>
                </div>
              </div>
            `
          };
      }
    };

    const emailContent = getEmailContent();

    // Configurar opciones del email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: `${process.env.SMTP_TO_EMAIL}, ceo@mateomoa.com`,
      replyTo: email || process.env.SMTP_FROM_EMAIL,
      subject: emailContent.subject,
      html: emailContent.html,
    };

    console.log('Enviando email...');

    // Enviar email
    await transporter.sendMail(mailOptions);
    
    console.log('Email enviado exitosamente');

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error completo:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}