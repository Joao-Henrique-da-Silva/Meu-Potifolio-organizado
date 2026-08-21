import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export function Contact() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    setIsDark(document.documentElement.classList.contains('dark'));
    
    return () => observer.disconnect();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    console.log('Dados enviados:', data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('✅ Mensagem enviada com sucesso! (simulação)');
    reset();
  };

  const sectionBg = isDark ? 'bg-dark-card' : 'bg-section-bg';
  const titleColor = isDark ? 'text-dark-primary' : 'text-primary';
  const spanColor = isDark ? 'bg-dark-secondary' : 'bg-secondary';
  const textColor = isDark ? 'text-dark-text' : 'text-card-text';
  const iconBg = isDark ? 'bg-dark-badge' : 'bg-badge-bg';
  const iconColor = isDark ? 'text-dark-primary' : 'text-secondary';
  const inputBg = isDark ? 'bg-dark-card' : 'bg-white';
  const inputBorder = isDark ? 'border-dark-border focus:border-dark-secondary' : 'border-card-border focus:border-secondary';
  const inputText = isDark ? 'text-dark-text' : 'text-card-text';
  const inputPlaceholder = isDark ? 'placeholder:text-dark-text-muted' : 'placeholder:text-[#7a4a3a]';
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
          <div className="flex flex-col gap-5">
            <div className={`flex items-center gap-4 ${textColor}`}>
              <div className={`w-10 h-10 ${iconBg} rounded-full flex items-center justify-center ${iconColor} text-lg transition-colors duration-300`}>
                <FaMapMarkerAlt />
              </div>
              <span>Rua Tijucas do Sul, 250 – Cocaia, Guarulhos – SP</span>
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

            <button
              type="submit"
              disabled={isSubmitting}
              className={`${btnBg} text-white px-8 py-3 rounded-full font-semibold 
                         transition-colors disabled:opacity-70 
                         flex items-center justify-center gap-2`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
              <span>📨</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}