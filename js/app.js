var app = new Vue({
    el: '#lausan-qr-escaner-web',
    data: {
        urlEscaneada: '',
        idDispositivo: '',
        cantidadDispositivos: 0
    },
    methods: {
        grabar: function () {
            const codeReader = new ZXing.BrowserQRCodeReader();
            var dataComponente = this;

            codeReader
                .listVideoInputDevices()
                .then(videoInputDevices => {
                    dataComponente.cantidadDispositivos = videoInputDevices.length;
                    var idDispositivoSeleccionado = videoInputDevices.length > 1 ? videoInputDevices[1].deviceId : videoInputDevices[0].deviceId;
                    dataComponente.idDispositivo = idDispositivoSeleccionado;
                    codeReader
                        .decodeOnceFromVideoDevice(idDispositivoSeleccionado, 'video')
                        .then(result => {
                            dataComponente.urlEscaneada = result.text;
                        })
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    }
});