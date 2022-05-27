# README

这个插件用于快速创建多个Terminal并执行相应的命令。

配置样例：下面的配置将创建三个Terminal，并分别执行2条echo命令。

其中第一个元素为Terminal的title，如果设为空字符串，那么terminal的title将是正在运行的命令的名称。
第二个和第三个元素用于控制Terminal之间的父子关系，具有父子关系的Terminal将横向split布局。
第四个开始的元素为顺序执行的命令。

```json
{
    // .vscode/settings.json文件
    "conf.settingEditor.cmd":[
        ["Terminal 1", "Tag 1", "", "echo 11", "echo 12"], 
        ["Terminal 2", "Tag 2", "Tag 1", "echo 13", "echo 14"],
        ["Terminal 3", "Tag 3", "Tag 1", "echo 15", "echo 16"],
    ]
}
```