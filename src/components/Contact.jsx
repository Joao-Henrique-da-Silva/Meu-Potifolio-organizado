import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// === CONFIGURAÇÕES DO EMAILJS (SUBSTITUA PELOS SEUS DADOS) ===
const EMAILJS_SERVICE_ID = 'service_tcmzfol';        // Ex: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_v1cn46q';      // Ex: 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'jyi3LIZurAxQ1u1TA';         // Ex: 'user_abc123...'

// Schema de validação
const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export function Contact() {
  const [isDark, setIsDark] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setIsDark(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSending(true);
    setSendStatus(null);

    try {
      // Envia o e-mail via EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSendStatus('success');
        reset(); // Limpa o formulário
      } else {
        setSendStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      setSendStatus('error');
    } finally {
      setIsSending(false);
      // Limpa o status após 5 segundos
      setTimeout(() => setSendStatus(null), 5000);
    }
  };

  // Cores dinâmicas
  const sectionBg = isDark ? 'bg-dark-card' : 'bg-section-bg';
  const titleColor = isDark ? 'text-dark-primary' : 'text-primary';
  const spanColor = isDark ? 'bg-dark-secondary' : 'bg-secondary';
  const textColor = isDark ? 'text-dark-text' : 'text-card-text';
  const iconBg = isDark ? 'bg-dark-badge' : 'bg-badge-bg';
  const iconColor = isDark ? 'text-dark-primary' : 'text-secondary';
  const inputBg = isDark ? 'bg-dark-card' : 'bg-white';
  const inputBorder = isDark ? 'border-dark-border focus:border-dark-secondary' : 'border-card-border focus:border-secondary';
  const inputText = isDark ? 'text-dark-text' : 'text-card-text';
  const inputPlaceholder = isDark ? 'placeholder:text-dark-text-muted' : 'placeholder:text-[#A08070]';
  const btnBg = isDark ? 'bg-dark-secondary hover:bg-[#8B5CF6]' : 'bg-primary hover:bg-secondary';
  const linkColor = isDark ? 'text-dark-primary' : 'text-secondary';
  const errorColor = isDark ? 'text-red-400' : 'text-red-600';

  return (
    <section id="contato" className={`py-16 ${sectionBg} transition-colors duration-300`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl font-bold ${titleColor} text-center mb-10 relative transition-colors duration-300`}>
          Entre em contato
          <span className={`block w-12 h-1 ${spanColor} mx-auto mt-2 rounded transition-colors duration-300`}></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Informações de contato */}
          <div className="flex flex-col gap-5">
            <div className={`flex items-center gap-4 ${textColor}`}>
              <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center ${iconColor} text-lg transition-colors duration-300`}>
                <FaMapMarkerAlt />
              </div>
              <span>Guarulhos – SP</span>
            </div>
            <div className={`flex items-center gap-4 ${textColor}`}>
              <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center ${iconColor} text-lg transition-colors duration-300`}>
                <FaPhoneAlt />
              </div>
              <div className="flex flex-col">
                <span>(11) 9 7841-1516</span>
                <span>(11) 9 5778-0556</span>
              </div>
            </div>
            <div className={`flex items-center gap-4 ${textColor}`}>
              <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center ${iconColor} text-lg transition-colors duration-300`}>
                <FaEnvelope />
              </div>
              <span>joaohs22@gmail.com</span>
            </div>
            <div className={`flex items-center gap-4 ${textColor}`}>
              <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center ${iconColor} text-lg transition-colors duration-300`}>
                <FaGithub />
              </div>
              <a
                href="https://github.com/Joao-Henrique-da-Silva"
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkColor} font-medium hover:underline transition-colors duration-300`}
              >
                github.com/Joao-Henrique-da-Silva
              </a>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <input
                {...register('name')}
                placeholder="Seu nome"
                className={`w-full px-4 py-3 rounded-xl border ${inputBorder} 
                           ${inputBg} ${inputText} ${inputPlaceholder}
                           transition-colors duration-300 focus:outline-none`}
              />
              {errors.name && <p className={`${errorColor} text-sm mt-1`}>{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register('email')}
                placeholder="Seu e-mail"
                className={`w-full px-4 py-3 rounded-xl border ${inputBorder} 
                           ${inputBg} ${inputText} ${inputPlaceholder}
                           transition-colors duration-300 focus:outline-none`}
              />
              {errors.email && <p className={`${errorColor} text-sm mt-1`}>{errors.email.message}</p>}
            </div>

            <div>
              <textarea
                {...register('message')}
                rows="4"
                placeholder="Sua mensagem..."
                className={`w-full px-4 py-3 rounded-xl border ${inputBorder} 
                           ${inputBg} ${inputText} ${inputPlaceholder}
                           transition-colors duration-300 focus:outline-none resize-none`}
              />
              {errors.message && <p className={`${errorColor} text-sm mt-1`}>{errors.message.message}</p>}
            </div>

            {/* Botão com estado de envio */}
            <button
              type="submit"
              disabled={isSending}
              className={`${btnBg} text-white px-8 py-3 rounded-full font-semibold 
                         transition-all disabled:opacity-60 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2`}
            >
              {isSending ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar
                  <span>📨</span>
                </>
              )}
            </button>

            {/* Feedback de sucesso/erro */}
            {sendStatus === 'success' && (
              <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-center transition-all">
                ✅ Mensagem enviada com sucesso! Entrarei em contato em breve.
              </div>
            )}
            {sendStatus === 'error' && (
              <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-center transition-all">
                ❌ Erro ao enviar mensagem. Tente novamente mais tarde.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}