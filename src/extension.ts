// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	vscode.commands.registerCommand('vstodo.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello from VSTodo');
	});

	// context.subscriptions.push(disposable);
	vscode.commands.registerCommand("vstodo.askQuestion", async () => {
		const answer = await vscode.window.showInformationMessage('How was your day?', 'good', 'bad');
		if (answer === 'bad') {
			vscode.window.showInformationMessage("sorry to hear about it");
		}
	})
}

// This method is called when your extension is deactivated
export function deactivate() { }
