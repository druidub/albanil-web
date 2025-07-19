export function initContactForm(){
    const form = document.querySelector('#form-contacto')
    if(!form) return
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      const fd = new FormData(form)
      const nombre   = fd.get('nombre').trim()
      const email    = fd.get('email').trim()
      const mensaje  = fd.get('mensaje').trim()
      const okRGPD   = fd.get('rgpd')
  
      let errores = 0
      const setErr = (sel,msg) => {
        form.querySelector(sel).textContent = msg
        if(msg) errores++
      }
      setErr('[data-error-nombre]',  nombre.length<3 ? 'Mínimo 3 caracteres' : '')
      setErr('[data-error-email]',   !/^[\w-.]+@[\w-]+\.\w{2,}$/.test(email) ? 'Email inválido' : '')
      setErr('[data-error-mensaje]', mensaje.length<5 ? 'Escribe tu consulta' : '')
  
      if(!okRGPD) { errores++; alert('Debes aceptar la política de privacidad'); }
  
      if(errores) return
  
      /* ---- ENVÍO ----
         // Opción EmailJS:
         emailjs.send('service_id','template_id',{
           nombre,email,mensaje
         }).then(() => showOK())
  
         // Por ahora solo simulamos: */
      console.log({nombre,email,mensaje})
      showOK()
    })
  
    function showOK(){
      form.querySelector('.form-ok').hidden = false
      form.reset()
    }
  }
  