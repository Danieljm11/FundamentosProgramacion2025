const materialSelect = document.getElementById('material');
const cantidadInput = document.getElementById('cantidad');
const provinciaSelect = document.getElementById('provincia');
const totalDisplay = document.getElementById('total');
const btnCerrarPopup = document.getElementById('btnCerrarPopup');
const formContainer = document.querySelector('.form-container');
const formularioPago = document.getElementById('formPago');


const calcularTotal = () => {
  const precioMaterial = parseInt(materialSelect.selectedOptions[0].dataset.price);
  const cantidad = parseInt(cantidadInput.value);
  const provincia = provinciaSelect.value;

  let subtotal = precioMaterial * cantidad;

  // Costo por carga pesada
  if (cantidad > 3) {
    subtotal += 1000;
  }

  // Costo por provincia
  if (provincia !== 'San Jose' && provincia !== 'Cartago') {
    subtotal += 3000; // Aquí puedes cambiar el precio según tus necesidades
  }

  totalDisplay.textContent = `Total a pagar: ₡${subtotal.toLocaleString()}`;
};

materialSelect.addEventListener('change', calcularTotal);
cantidadInput.addEventListener('input', calcularTotal);
provinciaSelect.addEventListener('change', calcularTotal);

// Calcular el total al cargar la página
calcularTotal();

const btnPagar = document.getElementById('btnPagar');
const formPago = document.getElementById('formPago');
const btnCompletar = document.getElementById('btnCompletar');
const modalExito = document.getElementById('modalExito');

btnPagar.addEventListener('click', () => {
  formPago.style.display = 'block';
  btnPagar.style.display = 'none';
});

btnCompletar.addEventListener('click', () => {
  const nombre = document.getElementById('nombreTitular').value.trim();
  const tarjeta = document.getElementById('numeroTarjeta').value.trim();
  const vencimiento = document.getElementById('fechaVencimiento').value.trim();
  const cvv = document.getElementById('codigoSeguridad').value.trim();

  const tarjetaValida = /^\d{16}$/.test(tarjeta);
  const cvvValido = /^\d{3}$/.test(cvv);

  if (!nombre || !tarjeta || !vencimiento || !cvv) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Por favor, complete todos los campos.'
    });
    return;
  }

  if (!tarjetaValida) {
    Swal.fire({
      icon: 'error',
      title: 'Tarjeta inválida',
      text: 'El número de tarjeta debe contener exactamente 16 dígitos numéricos.'
    });
    return;
  }

  if (!cvvValido) {
    Swal.fire({
      icon: 'error',
      title: 'CVV inválido',
      text: 'El código de seguridad (CVV) debe tener exactamente 3 dígitos numéricos.'
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: '¡Pago completado!',
    text: '🎉 Su pedido ha sido completado con éxito.',
    confirmButtonText: 'Aceptar'
  }).then(() => {
    formularioPago.style.display = 'none';
    formContainer.style.display = 'block';
    btnPagar.style.display = 'block';
  
    // Limpiar campos
    document.getElementById('nombreTitular').value = '';
    document.getElementById('numeroTarjeta').value = '';
    document.getElementById('fechaVencimiento').value = '';
    document.getElementById('codigoSeguridad').value = '';
  });
  
});

btnCerrarPopup.addEventListener('click', () => {
  modalExito.style.display = 'none';
  formularioPago.style.display = 'none';
  formContainer.style.display = 'block';
  btnPagar.style.display = 'block';

  // Limpiar campos de pago
  document.getElementById('nombreTitular').value = '';
  document.getElementById('numeroTarjeta').value = '';
  document.getElementById('fechaVencimiento').value = '';
  document.getElementById('codigoSeguridad').value = '';
});

