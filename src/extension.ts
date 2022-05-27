// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { TerminalInfo } from './config';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "myext" is now active!');

	context.subscriptions.push(vscode.commands.registerCommand('myext.createterminals', async () => {
		const cmdArray: Array<Array<string>> = vscode.workspace.getConfiguration().get('conf.settingEditor.cmd') as Array<Array<string>>;
		console.log(cmdArray.length);

        let terminalMap : Map<string, TerminalInfo> = new Map<string, TerminalInfo>();

        for (var i:number = 0; i<cmdArray.length; i++) {
            var terminalInfo: TerminalInfo = new TerminalInfo(cmdArray[i]);
            terminalInfo.init(terminalMap);
            terminalInfo.run();
            
            terminalMap.set(terminalInfo.tag, terminalInfo);
        }
		
        /*
		var parentTerminalA : any;

		for (var i:number = 0; i<cmdArray.length; i++) {
			var ternimalName : string = cmdArray[i][0];

			var opt : any = {
				name: ternimalName,
				color: new vscode.ThemeColor('terminal.ansiRed'),
				iconPath: { id: 'heart' },
			};

			if (i === 0) {
				opt["location"] = 1;
			} else {
				opt["location"] = {parentTerminal: parentTerminalA};
			}
			
			const terminal = vscode.window.createTerminal(opt);
			terminal.show();

			for (var j : number = 1; j < cmdArray[i].length; j++) {
				terminal.sendText(cmdArray[i][j]);
			}

			parentTerminalA = terminal;
		}
        */
	}));
}

// this method is called when your extension is deactivated
export function deactivate() {}
