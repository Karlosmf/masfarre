const obtenerFolders = async () => {
    try {
        const resultado = await fetch('https://masfarre.com/innodesign/folders.php');
        const data = await resultado.json();
        console.log (data); 
    } catch (error) {
        if (error === 400) {
            messageAlert('No se pudo obtener los folders');   
        }
        console.log(error);
    }
    finally {
        console.log('finally');    
    }

}

obtenerFolders();