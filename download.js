let currentProduct = '';

function showDownloadOptions(product) {
    currentProduct = product;
    const dialog = document.getElementById('downloadDialog');
    dialog.showModal();
}

function closeDialog() {
    const dialog = document.getElementById('downloadDialog');
    dialog.close();
}

function download(type) {
    let files;
    if (currentProduct === 'spark5') {
        files = {
            'apk': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/H53034E71__20241102070843.apk',
            'windows': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.0.zip',
            'mac': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.0.WKWebView.macOS.zip',
            'linux': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.1.64.Electron.Linux.zip'
        };
    } else if (currentProduct === 'spark4') {
        files = {
            'apk': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.4.1.1.0/H5DD2E11E__20240727081549.apk',
            'windows': 'download/致歉声明.txt',
            'mac': 'download/致歉声明.txt',
            'linux': 'download/致歉声明.txt'
        };
    }

    if (type === 'all') {
        if (currentProduct === 'spark5') {
            window.open('https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.1.1.tar.gz', '_blank');
        } else if (currentProduct === 'spark4') {
            window.open(files['apk'], '_blank');
        }
    } else {
        window.open(files[type], '_blank');
    }

    closeDialog();
}