document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript cargado correctamente");

  // Objeto para almacenar los datos del formulario
  let formularioData = {
    datosPersonales: {},
    familiares: [],
    condicionesSalud: [],
    internamientos: []
  };

  // Función para cambiar de página
  function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page${pageNumber}`).classList.add('active');
  }

  // Función para guardar datos personales
  function saveDatosPersonales() {
    formularioData.datosPersonales = {
      nombre: document.getElementById("nombre").value,
      edad: document.getElementById("edad").value,
      direccion: document.getElementById("direccion").value
    };
  }

  // Función para agregar un familiar
  function addFamiliar() {
    const nombre = document.getElementById("nombreFamiliar").value;
    const parentesco = document.getElementById("parentesco").value;
    const edad = document.getElementById("edadFamiliar").value;

    if (nombre && parentesco && edad) {
      formularioData.familiares.push({ nombre, parentesco, edad });
      alert("Familiar agregado");
      document.getElementById("nombreFamiliar").value = '';
      document.getElementById("parentesco").value = '';
      document.getElementById("edadFamiliar").value = '';
    } else {
      alert("Complete todos los campos");
    }
  }

  // Función para agregar una condición de salud
  function addCondicion() {
    const enfermedad = document.getElementById("enfermedad").value;
    const tiempo = document.getElementById("tiempoEnfermedad").value;

    if (enfermedad && tiempo) {
      formularioData.condicionesSalud.push({ enfermedad, tiempo });
      alert("Condición agregada");
      document.getElementById("enfermedad").value = '';
      document.getElementById("tiempoEnfermedad").value = '';
    } else {
      alert("Complete todos los campos");
    }
  }

  // Función para agregar un internamiento
  function addInternamiento() {
    const fecha = document.getElementById("fechaInternamiento").value;
    const centroMedico = document.getElementById("centroMedico").value;
    const diagnostico = document.getElementById("diagnostico").value;

    if (fecha && centroMedico && diagnostico) {
      formularioData.internamientos.push({ fecha, centroMedico, diagnostico });
      alert("Internamiento agregado");
    } else {
      alert("Complete todos los campos");
    }
  }

  // Función para mostrar los datos registrados
  function mostrarDatos() {
    saveDatosPersonales();
    document.getElementById("resultado").textContent = JSON.stringify(formularioData, null, 2);
  }

  // Función para reiniciar el formulario
  function resetForm() {
    formularioData = {
      datosPersonales: {},
      familiares: [],
      condicionesSalud: [],
      internamientos: []
    };
    nextPage(1);
    document.getElementById("resultado").textContent = '';
    alert("Formulario reiniciado");
  }

  // Exponer funciones globales
  window.nextPage = nextPage;
  window.addFamiliar = addFamiliar;
  window.addCondicion = addCondicion;
  window.addInternamiento = addInternamiento;
  window.mostrarDatos = mostrarDatos;
  window.resetForm = resetForm;
});
