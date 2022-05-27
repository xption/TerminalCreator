import * as vscode from 'vscode';

export class TerminalInfo {
    name : string = "";
    tag : string = "";
    parentTag : string = "";
    cmdArray : Array<string> = new Array<string>();
    terminal!: vscode.Terminal;

    public constructor(stringArray: Array<string>) {
        this.name = stringArray[0];
        this.tag = stringArray[1];
        this.parentTag = stringArray[2];

        for (var i: number = 3; i < stringArray.length; i++) {
            this.cmdArray.push(stringArray[i]);
        }
    }

    public init(terminalMap : Map<string, TerminalInfo>): void {
        var opt : any = {
            //name: this.name,
            color: new vscode.ThemeColor('terminal.ansiRed'),
            iconPath: { id: 'heart' },
        };

        if (this.name.length > 0) {
            opt["name"] = this.name;
        }

        if (this.parentTag && this.parentTag.length > 0 && terminalMap.has(this.parentTag)) {
			// opt["location"] = {parentTerminal: this.parent};
            opt["location"] = {parentTerminal: terminalMap.get(this.parentTag)?.terminal};
        }
         else {
            //opt["location"] = 1;
        }

        this.terminal = vscode.window.createTerminal(opt);
		this.terminal.show();
    }

    public run() : void {
        for (var i : number = 0; i < this.cmdArray.length; i++) {
            this.terminal.sendText(this.cmdArray[i]);
        }
    }
}