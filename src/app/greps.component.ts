import { Component, OnInit } from '@angular/core';
import grapesjs from 'grapesjs';
import 'grapesjs-preset-newsletter';


@Component({
    selector: 'greps-app',
    templateUrl: './greps.component.html',
    styleUrls: ['./app.component.scss']
})
export class GrapeComponent implements OnInit {
    private _editor: any;
    name = 'Angular 6';

    constructor() {

    }
    get editor() {
        return this._editor;
    }

    ngOnInit() {
        this._editor = this.initializeEditor();
        this.editor.on('asset:add', () => {
            console.log('Asset add fired');
            // this.editor.runCommand('open-assets');
        });

    }
    private initializeEditor(): any {
        console.dir(window);
        return grapesjs.init({
            container: '#gjs',
            autorender: true,
            forceClass: false,
            components: '',
            style: '',
            plugins: ['gjs-preset-newsletter'],
            pluginsOpts: {
                'gjs-preset-newsletter': {
                    navbarOpts: false,
                    countdownOpts: false,
                    formsOpts: false,
                    blocksBasicOpts: {
                        blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3'],
                        flexGrid: false,
                        stylePrefix: 'lala-'
                    }
                }
            },
            // assetManager: {
            //     uploadText: 'Add image through link or upload image',
            //     modalTitle: 'Select Image',
            //     openAssetsOnDrop: true,
            //     inputPlaceholder: 'http://url/to/the/image.jpg',
            //     addBtnText: 'Add image',
            //     uploadFile: (e) => {
            //         const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
            //     },
            //     handleAdd: (textFromInput) => {
            //         this.editor.AssetManager.add(textFromInput);
            //     }
            // },
            canvas: {
                styles: [
                    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
                    'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
                ],
                scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js']
            }
        });
    }
}
