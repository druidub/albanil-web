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
  
      /* ---- ENVÍO real con EmailJS ---- */
      emailjs.send('service_taeelqb', 'template_bzhhdxi', {
        name: nombre,
        email: email,
        message: mensaje,
        reply_to : email
      })
        .then(() => showOK())
        .catch(err => {
          alert('Lo siento, hubo un error al enviar. Intenta de nuevo.');
          console.error(err);
  });
    })
  
    function showOK(){
      form.querySelector('.form-ok').hidden = false
      form.reset()
    }
  }
  