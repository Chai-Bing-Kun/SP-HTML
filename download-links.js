// download-links.js - 所有Spark下载链接配置文件

const SPARK_DOWNLOADS = {
    // Spark 5.x 版本
    spark5: {
        name: 'Spark 5',
        latest: '5.3.4.1',
        versions: {
            '5.3.4.1': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/H53034E71__20250607175308.apk',
                    'Windows x64 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1-Electron-x64.zip',
                    'Windows x64 安装程序': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark-5.3.4.1-x64.msi',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1.zip',
                    'Windows x32 安装程序': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark-5.3.4.1-x32.msi',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1.64.Electron.Linux.zip',
                    'Linux x32': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1-Linux-Electron-ARM-x32.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.4.1.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/H53034E71__20250607175308.apk',
                    'Windows x64 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1-Electron-x64.zip',
                    'Windows x64 安装程序': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark-5.3.4.1-x64.msi',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1.zip',
                    'Windows x32 安装程序': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark-5.3.4.1-x32.msi',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1.64.Electron.Linux.zip',
                    'Linux x32': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.1/Spark.5.3.4.1-Linux-Electron-ARM-x32.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.4.1.zip'
                }
            },
            '5.3.4.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/H53034E71__20250418180022.apk',
                    'Windows x64 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0-Electron-x64.zip',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0.64.Electron.Linux.zip',
                    'Linux x32': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0-Linux-Electron-ARM-x32.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.4.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/H53034E71__20250418180022.apk',
                    'Windows x64 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0-Electron-x64.zip',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0.64.Electron.Linux.zip',
                    'Linux x32': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.4.0/Spark.5.3.4.0-Linux-Electron-ARM-x32.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.4.0.zip'
                }
            },
            '5.3.3.1': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/H53034E71__20250302073119.apk',
                    'Windows x64 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1-Electron-x64.zip',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1.64.Electron.Linux.zip',
                    'Linux x32': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1-Linux-Electron-ARM-x32.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.3.1.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/H53034E71__20250302073119.apk',
                    'Windows x64 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1-Electron-x64.zip',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1.64.Electron.Linux.zip',
                    'Linux x32': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.1/Spark.5.3.3.1-Linux-Electron-ARM-x32.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.3.1.zip'
                }
            },
            '5.3.3.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/H53034E71__20250223121349.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.3.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/H53034E71__20250223121349.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.3.0/Spark.5.3.3.0.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.3.0.zip'
                }
            },
            '5.3.2.6': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.6/H53034E71__20250127215051.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.6/Spark.5.3.2.6.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.6/Spark.5.3.2.6.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.6/Spark.5.3.2.6.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.6.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.6/H53034E71__20250127215051.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.6/Spark.5.3.2.6.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.6/Spark.5.3.2.6.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.6/Spark.5.3.2.6.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.6.zip'
                }
            },
            '5.3.2.5': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.5/H53034E71__20250123093440.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.5/Spark.5.3.2.5.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.5/Spark.5.3.2.5.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.5/Spark.5.3.2.5.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.5.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.5/H53034E71__20250123093440.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.5/Spark.5.3.2.5.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.5/Spark.5.3.2.5.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.5/Spark.5.3.2.5.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.5.zip'
                }
            },
            '5.3.2.3': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.3/H53034E71__20250110214406.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.3/Spark.5.3.2.3.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.3/Spark.5.3.2.3.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.3/Spark.5.3.2.3.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.3.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.3/H53034E71__20250110214406.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.3/Spark.5.3.2.3.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.3/Spark.5.3.2.3.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.3/Spark.5.3.2.3.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.3.zip'
                }
            },
            '5.3.2.1': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.1/H53034E71__20241227205118.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.1/Spark.5.3.2.1.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.1/Spark.5.3.2.1.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.1/Spark.5.3.2.1.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.1.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.1/H53034E71__20241227205118.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.1/Spark.5.3.2.1.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.1/Spark.5.3.2.1.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.2.1/Spark.5.3.2.1.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.2.1.zip'
                }
            },
            '5.3.1.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.1.0/H53034E71__20241214084109.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.1.0/Spark.5.3.1.0.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.1.0/Spark.5.3.1.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.1.0/Spark.5.3.1.0.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.1.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.1.0/H53034E71__20241214084109.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.1.0/Spark.5.3.1.0.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.1.0/Spark.5.3.1.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.1.0/Spark.5.3.1.0.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.1.0.zip'
                }
            },
            '5.3.0.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.0.0/H53034E71__20241201145055.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.0.0/Spark.5.3.0.0.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.0.0/Spark.5.3.0.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.0.0/Spark.5.3.0.0.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.0.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.0.0/H53034E71__20241201145055.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.0.0/Spark.5.3.0.0.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.0.0/Spark.5.3.0.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.3.0.0/Spark.5.3.0.0.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.3.0.0.zip'
                }
            },
            '5.2.1.2': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.2/H53034E71__20241124121937.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.2/Spark.5.2.1.2.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.2/Spark.5.2.1.2.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.2/Spark.5.2.1.2.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.1.2.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.2/H53034E71__20241124121937.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.2/Spark.5.2.1.2.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.2/Spark.5.2.1.2.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.2/Spark.5.2.1.2.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.1.2.zip'
                }
            },
            '5.2.1.1': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/H53034E71__20241102070843.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.0.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.1.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.1.1.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/H53034E71__20241102070843.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.0.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.1/Spark.5.2.1.1.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.1.1.zip'
                }
            },
            '5.2.1.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.0/H53034E71__20241101221931.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.0/Spark.5.2.1.0.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.0/Spark.5.2.1.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.0/Spark.5.2.1.0.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.1.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.0/H53034E71__20241101221931.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.0/Spark.5.2.1.0.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.0/Spark.5.2.1.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.1.0/Spark.5.2.1.0.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.1.0.zip'
                }
            },
            '5.2.0.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/H53034E71__20241002205009.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.64.Electron.Linux.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.0.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/H53034E71__20241002205009.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.WKWebView.macOS.zip',
                    'Linux x64 (ARM)': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.2.0.0/Spark.5.2.0.0.64.Electron.Linux.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.2.0.0.zip'
                }
            },
            '5.1.4.1': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.4.1/H53034E71__20240827181518.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.4.1/Spark.5.1.4.1.zip',
                    'macOS': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.4.1/Spark.5.1.4.1.WKWebView.macOS.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.4.1.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.4.1/H53034E71__20240827181518.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.4.1/Spark.5.1.4.1.zip',
                    'macOS': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.4.1/Spark.5.1.4.1.WKWebView.macOS.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.4.1.zip'
                }
            },
            '5.1.3.1': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.3.1/H53034E71__20240804211807.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.3.1/Spark.5.1.3.1.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.3.1.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.3.1/H53034E71__20240804211807.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.3.1/Spark.5.1.3.1.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.3.1.zip'
                }
            },
            '5.1.3.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.3.0/H53034E71__20240803212046.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.3.0/Spark.5.1.3.0.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.3.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.3.0/H53034E71__20240803212046.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.3.0/Spark.5.1.3.0.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.3.0.zip'
                }
            },
            '5.1.2.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.2.0/H53034E71__20240731180538.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.2.0/Spark.5.1.2.0.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.2.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.2.0/H53034E71__20240731180538.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.2.0/Spark.5.1.2.0.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.2.0.zip'
                }
            },
            '5.1.1.1': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.1.1/H53034E71__20240727173653.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.1.1/Spark.5.1.1.1.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.1.1.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.1.1/H53034E71__20240727173653.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.1.1/Spark.5.1.1.1.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.1.1.zip'
                }
            },
            '5.1.1.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.1.0/H53034E71__20240727171927.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.1.0/Spark.5.1.1.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.1.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.1.0/H53034E71__20240727171927.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.1.0/Spark.5.1.1.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.1.0.zip'
                }
            },
            '5.1.0.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.0.0/H53034E71__20240727171039.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.0.0/Spark.5.1.0.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.0.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.0.0/H53034E71__20240727171039.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.5.1.0.0/Spark.5.1.0.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.5.1.0.0.zip'
                }
            },
            '5.0.0.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v5.0.0.0/H53034E71__20240727082236.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v5.0.0.0/spark-5.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v5.0.0.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v5.0.0.0/H53034E71__20240727082236.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v5.0.0.0/spark-5.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v5.0.0.0.zip'
                }
            }
        }
    },
    // Spark 4.x 版本
    spark4: {
        name: 'Spark 4',
        latest: '4.1.1.0',
        versions: {
            '4.1.1.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.4.1.1.0/H5DD2E11E__20240727081549.apk',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.4.1.1.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.4.1.1.0/H5DD2E11E__20240727081549.apk',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.4.1.1.0.zip'
                }
            },
            '4.0.0.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.4.0.0.0/H5612C787__20240727081044.apk',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.4.0.0.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.4.0.0.0/H5612C787__20240727081044.apk',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.4.0.0.0.zip'
                }
            }
        }
    },
    // Spark 3.x 版本
    spark3: {
        name: 'Spark 3',
        latest: '3.0.1.0',
        versions: {
            '3.0.1.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v3.0.1.0/H5EFB41FC__20240727073359.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v3.0.1.0/Spark.3.0.spa3ap3.1.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v3.0.1.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v3.0.1.0/H5EFB41FC__20240727073359.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v3.0.1.0/Spark.3.0.spa3ap3.1.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v3.0.1.0.zip'
                }
            },
            '3.0.0.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.3.0.0.0/H5FEEB2D8__20240727074843.apk',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.3.0.0.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.3.0.0.0/H5FEEB2D8__20240727074843.apk',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.3.0.0.0.zip'
                }
            }
        }
    },
    // Spark 2.x 版本
    spark2: {
        name: 'Spark 2',
        latest: '2.2.0.0',
        versions: {
            '2.2.0.0': {
                github: {
                    'Android APK': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.2.2.0.0/H505B2286__20240726173713.apk',
                    'Windows x32 免安装': 'https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.2.2.0.0/spark.2.2.0.0.zip',
                    '源码包': 'https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.2.2.0.0.zip'
                },
                mirror: {
                    'Android APK': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.2.2.0.0/H505B2286__20240726173713.apk',
                    'Windows x32 免安装': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/releases/download/v.2.2.0.0/spark.2.2.0.0.zip',
                    '源码包': 'https://gh.bugdey.us.kg/https://github.com/Chai-Bing-Kun/Spark-X/archive/refs/tags/v.2.2.0.0.zip'
                }
            }
        }
    }
};

// ========== 工具函数 ==========

// 获取指定产品的所有版本列表（按版本号降序排列）
function getVersions(product) {
    const productData = SPARK_DOWNLOADS[product];
    if (!productData) return [];
    return Object.keys(productData.versions).sort((a, b) => {
        const partsA = a.split('.').map(Number);
        const partsB = b.split('.').map(Number);
        for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
            const valA = partsA[i] || 0;
            const valB = partsB[i] || 0;
            if (valA !== valB) return valB - valA;
        }
        return 0;
    });
}

// 获取指定产品和版本的所有下载链接
function getDownloadLinks(product, version, source = 'github') {
    const productData = SPARK_DOWNLOADS[product];
    if (!productData) return null;
    const versionData = productData.versions[version];
    if (!versionData) return null;
    return versionData[source] || null;
}

// 获取产品名称
function getProductName(product) {
    return SPARK_DOWNLOADS[product]?.name || product;
}

// 获取最新版本
function getLatestVersion(product) {
    return SPARK_DOWNLOADS[product]?.latest || null;
}

// 检查产品是否存在
function productExists(product) {
    return SPARK_DOWNLOADS.hasOwnProperty(product);
}

// 检查版本是否存在
function versionExists(product, version) {
    const productData = SPARK_DOWNLOADS[product];
    if (!productData) return false;
    return productData.versions.hasOwnProperty(version);
}

// 获取指定产品的所有可用产品列表
function getAllProducts() {
    return Object.keys(SPARK_DOWNLOADS);
}

// ========== 导出到全局 ==========
window.SPARK_DOWNLOADS = SPARK_DOWNLOADS;
window.getVersions = getVersions;
window.getDownloadLinks = getDownloadLinks;
window.getProductName = getProductName;
window.getLatestVersion = getLatestVersion;
window.productExists = productExists;
window.versionExists = versionExists;
window.getAllProducts = getAllProducts;