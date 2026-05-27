// ============================================
// CONTACT PAGE — src/app/contact/page.tsx
// Form kontak + info sosial media
// ============================================
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '@/components/ui/PageLayout';
import PageHero from '@/components/ui/PageHero';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Card3D from '@/components/ui/Card3D';
import GlowButton from '@/components/ui/GlowButton';

// ✏️ EDIT KONTAK DI SINI
const CONTACT_INFO = [
  {
    icon: '💬',
    label: 'Discord',
    value: 'discord.gg/clozhi-smp',
    href: 'https://discord.gg/fyNQ3gnyc',
    desc: 'Cara tercepat menghubungi kami',
    color: '#5865f2',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@clozhismp',
    href: 'https://instagram.com/clozhismp',
    desc: 'Follow untuk update terbaru',
    color: '#e1306c',
  },
  {
    icon: '📺',
    label: 'YouTube',
    value: 'Clozhi SMP',
    href: 'https://youtube.com/@clozhismp',
    desc: 'Tonton konten server kami',
    color: '#ff0000',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'admin@clozhismp.net',
    href: 'mailto:admin@clozhismp.net',
    desc: 'Untuk keperluan bisnis/partnership',
    color: '#22d3ee',
  },
];

const FAQS = [
  { q: 'Bagaimana cara bergabung?', a: 'Buka Minecraft Java Edition → Multiplayer → Add Server → masukkan IP play.clozhismp.net. Gratis!' },
  { q: 'Server versi Minecraft berapa?', a: 'Server kami mendukung Minecraft Java Edition 1.20+. Pastikan kamu menggunakan versi yang sesuai.' },
  { q: 'Ada rank/donasi?', a: 'Ya! Kunjungi halaman Store kami untuk melihat berbagai paket rank dengan keuntungan eksklusif.' },
  { q: 'Saya kena ban, bagaimana appeal?', a: 'Buka ticket di Discord kami dengan format #ban-appeal dan jelaskan situasinya. Tim kami akan meninjau dalam 24-48 jam.' },
  { q: 'Boleh lapor pemain curang?', a: 'Tentu! Buka ticket #report di Discord dengan bukti screenshot/video. Semua laporan ditangani serius.' },
];

// Form input component
function FormInput({ label, type = 'text', value, onChange, placeholder, multiline = false }: {
  label: string; type?: string; value: string;
  onChange: (v: string) => void; placeholder: string; multiline?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const baseStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${focused ? 'rgba(245,197,24,0.5)' : 'rgba(255,255,255,0.08)'}`,
    transition: 'border-color 0.2s',
    outline: 'none',
    color: '#fff',
    width: '100%',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    resize: 'none' as const,
  };
  return (
    <div>
      <label className="block text-xs text-white/50 uppercase tracking-widest mb-2">{label}</label>
      {multiline ? (
        <textarea rows={5} value={value} onChange={e => onChange(e.target.value)}
          placeholder={placeholder} style={baseStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className="placeholder-white/20"
        />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)}
          placeholder={placeholder} style={baseStyle}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          className="placeholder-white/20"
        />
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    // In production: connect this to an API route or Formspree
    setSent(true);
  };

  return (
    <PageLayout accentColor="#22d3ee">
      <PageHero
        badge="Get In Touch"
        title={<>Contact <span style={{ background: 'linear-gradient(135deg,#22d3ee,#F5C518)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Us</span></>}
        subtitle="Ada pertanyaan, saran, atau butuh bantuan? Tim Clozhi SMP siap membantu kamu!"
        accentColor="#22d3ee"
      />

      <div className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">

          {/* ── Contact Form ── */}
          <ScrollReveal direction="left">
            <Card3D glowColor="#22d3ee" className="p-8" intensity={6}>
              <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Send a <span style={{ color: '#22d3ee' }}>Message</span>
              </h2>

              <AnimatePresence mode="wait">
                {!sent ? (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormInput label="Nama" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} placeholder="Username kamu" />
                      <FormInput label="Email" type="email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} placeholder="email@domain.com" />
                    </div>
                    <FormInput label="Subject" value={form.subject} onChange={v => setForm(f => ({ ...f, subject: v }))} placeholder="Tentang apa?" />
                    <FormInput label="Pesan" value={form.message} onChange={v => setForm(f => ({ ...f, message: v }))} placeholder="Tulis pesanmu di sini..." multiline />
                    <div className="pt-2">
                      <GlowButton variant="cyan" onClick={handleSubmit} className="w-full justify-center">
                        📨 Kirim Pesan
                      </GlowButton>
                    </div>
                    <p className="text-white/20 text-xs text-center">
                      💡 Atau langsung hubungi kami via Discord untuk respons lebih cepat
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="py-12 flex flex-col items-center text-center">
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}
                      className="text-6xl mb-4">✅</motion.div>
                    <h3 className="text-xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Pesan Terkirim!
                    </h3>
                    <p className="text-white/50 text-sm mb-6">Tim kami akan membalas dalam 24-48 jam.</p>
                    <button onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                      className="text-xs text-white/40 hover:text-white transition-colors">
                      ← Kirim pesan lain
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card3D>
          </ScrollReveal>

          {/* ── Contact Info ── */}
          <div className="space-y-4">
            <ScrollReveal direction="right">
              <h2 className="text-2xl font-black text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Find Us <span style={{ color: '#F5C518' }}>Online</span>
              </h2>
            </ScrollReveal>
            {CONTACT_INFO.map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 0.08} direction="right">
                <motion.a href={c.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl group block transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid rgba(255,255,255,0.07)` }}
                  whileHover={{ scale: 1.02, borderColor: `${c.color}40`, boxShadow: `0 0 25px ${c.color}15` }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                    {c.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm transition-colors group-hover:text-white">{c.label}</p>
                    <p className="font-mono text-xs truncate" style={{ color: c.color }}>{c.value}</p>
                    <p className="text-white/30 text-xs">{c.desc}</p>
                  </div>
                  <span className="text-white/20 group-hover:text-white/60 transition-colors text-lg">→</span>
                </motion.a>
              </ScrollReveal>
            ))}

            {/* Server IP quick copy */}
            <ScrollReveal delay={0.4} direction="right">
              <div className="p-4 rounded-xl text-center mt-4"
                style={{ background: 'rgba(245,197,24,0.06)', border: '1px solid rgba(245,197,24,0.2)' }}>
                <p className="text-white/40 text-xs mb-2">Server IP</p>
                <button onClick={() => navigator.clipboard.writeText('play.clozhismp.net')}
                  className="font-mono text-lg font-bold transition-colors hover:text-yellow-300"
                  style={{ color: '#F5C518' }}>
                  play.clozhismp.net
                </button>
                <p className="text-white/20 text-xs mt-1">Klik untuk copy</p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── FAQ ── */}
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Frequently <span style={{ color: '#22d3ee' }}>Asked</span>
            </h2>
            <p className="text-white/40 mt-2">Pertanyaan yang sering ditanyakan</p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <motion.div
                className="rounded-xl overflow-hidden cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${openFaq === i ? 'rgba(34,211,238,0.3)' : 'rgba(255,255,255,0.07)'}` }}
                whileHover={{ borderColor: 'rgba(34,211,238,0.2)' }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="flex items-center justify-between p-4">
                  <p className="text-white text-sm font-semibold pr-4">{faq.q}</p>
                  <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.2 }}
                    className="text-white/40 flex-shrink-0">▼</motion.span>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm text-white/55 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
