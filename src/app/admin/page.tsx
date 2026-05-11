'use client'

import { useEffect, useState } from 'react'
import { useResume } from '@/hooks/useResume'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import type { Resume } from '@/types/resume'

export default function AdminPage() {
  const { resume, updateResume, resetToDraft } = useResume()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [formData, setFormData] = useState<Resume | null>(null)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = sessionStorage.getItem('admin_auth')
    if (stored === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  useEffect(() => {
    if (resume && !formData) {
      setFormData(JSON.parse(JSON.stringify(resume)))
    }
  }, [resume, formData])

  const handleLogin = () => {
    const password = prompt('Contraseña admin:')
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_auth', 'true')
    } else {
      alert('Contraseña incorrecta')
    }
  }

  const handleSave = () => {
    if (!formData) return
    updateResume(formData)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const updateField = (path: string, value: string) => {
    if (!formData) return
    const keys = path.split('.')
    const updated = JSON.parse(JSON.stringify(formData)) as unknown as Resume & Record<string, unknown>
    let current: Record<string, unknown> = updated as Record<string, unknown>
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]] as Record<string, unknown>
    }
    current[keys[keys.length - 1]] = value
    setFormData(updated as unknown as Resume)
  }

  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--color-bg-dark)',
          gap: '1.5rem',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '2rem',
            fontStyle: 'italic',
            color: 'var(--color-text-light)',
          }}
        >
          Admin Panel
        </h1>
        <Button onClick={handleLogin} size="lg">
          Acceder
        </Button>
      </div>
    )
  }

  if (!formData) return null

  return (
    <div
      style={{
        minHeight: '100svh',
        background: 'var(--color-bg-dark)',
        color: 'var(--color-text-light)',
        padding: '2rem',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '1.5rem',
        }}
      >
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontStyle: 'italic' }}>
          ✦ Admin Panel
        </h1>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Button variant="ghost" size="sm" onClick={resetToDraft}>
            Resetear borrador
          </Button>
          <Button size="sm" onClick={handleSave} loading={saved}>
            {saved ? '✓ Guardado' : 'Guardar cambios'}
          </Button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Editor */}
        <section>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
            PERFIL PERSONAL
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>Nombre</label>
                <input
                  value={formData.personal.firstName}
                  onChange={(e) => updateField('personal.firstName', e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>Apellidos</label>
                <input
                  value={formData.personal.lastName}
                  onChange={(e) => updateField('personal.lastName', e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>Título</label>
              <input
                value={formData.personal.title}
                onChange={(e) => updateField('personal.title', e.target.value)}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>Bio</label>
              <textarea
                value={formData.personal.bio}
                onChange={(e) => updateField('personal.bio', e.target.value)}
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>Ubicación</label>
              <input
                value={formData.personal.location}
                onChange={(e) => updateField('personal.location', e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>

          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
            PROYECTOS DESTACADOS
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {formData.projects.map((project, idx) => (
              <div key={project.id || idx} style={{ padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>Nombre</label>
                    <input
                      value={project.name}
                      onChange={(e) => updateField(`projects.${idx}.name`, e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>URL</label>
                    <input
                      value={project.url || ''}
                      onChange={(e) => updateField(`projects.${idx}.url`, e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                    <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '0.4rem' }}>Descripción</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => updateField(`projects.${idx}.description`, e.target.value)}
                      rows={2}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                </div>
              </div>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const newProject = { id: `proj-${Date.now()}`, name: 'Nuevo Proyecto', description: '', url: '', technologies: [], featured: false };
                setFormData({ ...formData, projects: [...formData.projects, newProject] });
              }}
            >
              + Añadir Proyecto
            </Button>
          </div>
        </section>

        {/* Preview */}
        <section
          style={{
            border: '1px solid rgba(255,107,53,0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            background: 'rgba(255,107,53,0.04)',
          }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
            PREVIEW
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem', letterSpacing: '0.1em' }}>
            LO QUE VE EL VISITANTE
          </p>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontStyle: 'italic', marginBottom: '0.5rem' }}>
            {formData.personal.firstName}{' '}
            <span style={{ color: 'var(--color-primary)' }}>{formData.personal.lastName}</span>
          </h3>
          <p style={{ color: 'var(--color-text-muted)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>
            {formData.personal.title}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.65 }}>
            {formData.personal.bio}
          </p>

          {/* Color Theme Picker */}
          <div style={{ marginTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-accent)', letterSpacing: '0.1em' }}>
              🎨 TEMA DE COLORES
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { key: 'primary', label: 'Color Principal' },
                { key: 'secondary', label: 'Color Secundario' },
                { key: 'accent', label: 'Color de Acento' },
              ].map(({ key, label }) => (
                <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input
                    type="color"
                    value={formData.theme[key as keyof typeof formData.theme] || '#FF6B35'}
                    onChange={(e) => {
                      const updated = { ...formData, theme: { ...formData.theme, [key]: e.target.value } }
                      setFormData(updated)
                      // Preview en vivo: actualizar variables CSS inmediatamente
                      document.documentElement.style.setProperty(`--color-${key}`, e.target.value)
                    }}
                    style={{
                      width: '2.5rem',
                      height: '2rem',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      background: 'transparent',
                    }}
                  />
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)' }}>
                    {label}:{' '}
                    <span style={{ color: 'var(--color-text-light)' }}>
                      {formData.theme[key as keyof typeof formData.theme]}
                    </span>
                  </span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-mono)' }}>
              Los cambios se aplican en tiempo real. Guarda para persistirlos.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.6rem 0.75rem',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--color-text-light)',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-sans)',
  outline: 'none',
}
