# README

这个插件用于快速创建多个Terminal并执行相应的命令。

配置样例：下面的配置将创建三个Terminal，并分别执行2条echo命令。

```json
{
    // .vscode/settings.json文件
    "conf.settingEditor.cmd":[
        ["Ternimal 1", "echo 11", "echo 12"], // 第一个元素是Ternimal的title，其余为陆续执行的命令
        ["Ternimal 2", "echo 13", "echo 14"], // 第一个元素是Ternimal的title，其余为陆续执行的命令
        ["Ternimal 3", "echo 15", "echo 16"], // 第一个元素是Ternimal的title，其余为陆续执行的命令
    ]
}
```