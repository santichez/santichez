var app = new Vue({
    el: '#lausan-qr-escaner-web',
    data: {
        urlEscaneada: ''
    },
    methods: {
        grabar: function () {
            const codeReader = new ZXing.BrowserQRCodeReader();

            codeReader
                .listVideoInputDevices()
                .then(videoInputDevices => {
                    var idDispositivoSeleccionado = videoInputDevices.length > 1 ? videoInputDevices[1].deviceId : videoInputDevices[0].deviceId;

                    codeReader
                        .decodeOnceFromVideoDevice(idDispositivoSeleccionado, 'video')
                        .then(result => urlEscaneada = result.text)
                        .catch(err => console.error(err));
                })
                .catch(err => console.error(err));
        }
    }
});