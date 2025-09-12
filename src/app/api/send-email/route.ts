// src/app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, formType } = body;

    // Validar campos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Configurar transportador SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ejemplo: smtp.gmail.com
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465', // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Personalizar contenido según el tipo de formulario
    const getEmailContent = () => {
      switch (formType) {
        case 'contact':
          return {
            subject: `Nuevo mensaje de contacto: ${subject || 'Sin asunto'}`,
            html: `
              <h2>Nuevo mensaje de contacto</h2>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Asunto:</strong> ${subject || 'No especificado'}</p>
              <p><strong>Mensaje:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `
          };
        
        case 'registration':
          return {
            subject: `${subject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #004D85; border-bottom: 2px solid #0077B6; padding-bottom: 10px;">
                  ${subject}
                </h2>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 20px;">
                  Email enviado desde: ${email}<br>
                  Fecha: ${new Date().toLocaleString('es-EC')}
                </p>
              </div>
            `
          };
        
        case 'service':
          return {
            subject: `Solicitud de servicio: ${subject || name}`,
            html: `
              <h2>Nueva solicitud de servicio</h2>
              <p><strong>Cliente:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Servicio solicitado:</strong> ${subject || 'No especificado'}</p>
              <p><strong>Detalles:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `
          };
        
        default:
          return {
            subject: `Nuevo mensaje de ${name}`,
            html: `
              <h2>Nuevo mensaje desde el sitio web</h2>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mensaje:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `
          };
      }
    };

    const emailContent = getEmailContent();

    // Configurar opciones del email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: email,
      subject: emailContent.subject,
      html: emailContent.html,
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado exitosamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}