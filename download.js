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
            'apk': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/H53034E71__20250223121349.apk',
            'windows': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.zip',
            'mac': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.WKWebView.macOS.zip',
            'linux': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.64.Electron.Linux.zip',
            'fastapk': 'https://ghproxy.cn/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/H53034E71__20250223121349.apk',
            'fastwindows': 'https://ghproxy.cn/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.zip',
            'fastmac': 'https://ghproxy.cn/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.WKWebView.macOS.zip',
            'fastlinux': 'https://ghproxy.cn/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.64.Electron.Linux.zip'
        };
    } else if (currentProduct === 'spark4') {
        files = {
            'apk': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.4.1.1.0/H5DD2E11E__20240727081549.apk',
            'windows': 'download/致歉声明.txt',
            'mac': 'download/致歉声明.txt',
            'linux': 'download/致歉声明.txt',
            'fastapk': 'https://ghproxy.cn/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.4.1.1.0/H5DD2E11E__20240727081549.apk',
            'fastwindows': 'download/致歉声明.txt',
            'fastmac': 'download/致歉声明.txt',
            'fastlinux': 'download/致歉声明.txt'
        };
    }

    if (type === 'all') {
        if (currentProduct === 'spark5') {
            // Spark 5 的全部下载链接
            window.open('https://ghproxy.cn/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.6.zip', '_blank');
        } else if (currentProduct === 'spark4') {
            // Spark 4 的全部下载链接
            window.open('https://ghproxy.cn/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.4.1.1.0.zip', '_blank');
        }
    } else {
        window.open(files[type], '_blank');
    }

    closeDialog();
}
