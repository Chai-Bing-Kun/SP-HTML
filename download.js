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
            'apk': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/H53034E71__20241002205009.apk',
            'windows': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.zip',
            'mac': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.WKWebView.macOS.zip',
            'linux': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.64.Electron.Linux.zip'
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
            for (let file in files) {
                window.open(files[file], '_blank');
            }
        } else if (currentProduct === 'spark4') {
            window.open(files['apk'], '_blank');
        }
    } else {
        window.open(files[type], '_blank');
    }

    closeDialog();
}