class API {
    async obtenerDatos() {

        
        const total = 1000;
         // Obtener desde la API // espera conectarse con la web totalmente
         const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

         // Retornar como JSON // espera la siguiente hasta q ste todos los json
         const respuestaJSON = await datos.json();

         // Retornar el objeto
         return {
              respuestaJSON
         }
    }
}

