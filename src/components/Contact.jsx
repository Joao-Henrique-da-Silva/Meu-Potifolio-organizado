import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub } from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export function Contact() {
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

  return (
    <section id="contato" className="py-16 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-10 relative">
          Entre em contato
          <span className="block w-12 h-1 bg-secondary mx-auto mt-2 rounded"></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4 text-card-text">
              <div className="w-10 h-10 bg-badge-bg rounded-full flex items-center justify-center text-secondary text-lg">
                <FaMapMarkerAlt />
              </div>
              <span>Brasil, SP</span>
            </div>
            <div className="flex items-center gap-4 text-card-text">
              <div className="w-10 h-10 bg-badge-bg rounded-full flex items-center justify-center text-secondary text-lg">
                <FaPhoneAlt />
              </div>
              <span>(11) 9 7841-1516</span>
              <span>(11) 9 5778-0556</span>
            </div>
            <div className="flex items-center gap-4 text-card-text">
              <div className="w-10 h-10 bg-badge-bg rounded-full flex items-center justify-center text-secondary text-lg">
                <FaEnvelope />
              </div>
              <span>joaohs22@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-card-text">
              <div className="w-10 h-10 bg-badge-bg rounded-full flex items-center justify-center text-secondary text-lg">
                <FaGithub />
              </div>
              <a
                href="https://github.com/Joao-Henrique-da-Silva"
                target="_blank"
                className="text-secondary font-medium hover:underline"
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
                className="w-full px-4 py-3 rounded-xl border border-card-border bg-white 
                           focus:outline-none focus:border-secondary transition-colors"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register('email')}
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 rounded-xl border border-card-border bg-white 
                           focus:outline-none focus:border-secondary transition-colors"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <textarea
                {...register('message')}
                rows="4"
                placeholder="Sua mensagem..."
                className="w-full px-4 py-3 rounded-xl border border-card-border bg-white 
                           focus:outline-none focus:border-secondary transition-colors resize-none"
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold 
                         hover:bg-secondary transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
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