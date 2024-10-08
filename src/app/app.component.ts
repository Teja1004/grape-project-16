import { Component, OnInit } from '@angular/core';
import { grapesjs } from 'grapesjs';
import 'grapesjs-preset-newsletter';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

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
    const config: GrapesjsConfig = {
      container: '#gjs', // Replace with your container element ID if needed
      canvas: {
        styles: [
          'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap', // Load Merriweather font inside GrapesJS iframe
        ],
      },
      styleManager: {
        sectors: [
          {
            name: 'Typography',
            buildProps: ['font-family', 'font-size', 'font-weight', 'color'],
            properties: [
              {
                name: 'Font Family',
                property: 'font-family',
                type: 'select',
                defaults: 'Times New Roman, serif',
                options: [
                  { value: 'Arial, sans-serif', name: 'Arial' },
                  { value: 'Helvetica, sans-serif', name: 'Helvetica' },
                  { value: 'Times New Roman, serif', name: 'Times New Roman' },
                  { value: 'Merriweather, serif', name: 'Merriweather' }, // Your added font
                ],
              },
            ],
          },
        ],
      },
      autorender: true,
      forceClass: false,
      components: '',
      style: '',
      plugins: ['gjs-preset-newsletter', 'gjs-blocks-basic'],
      pluginsOpts: {
        'gjs-preset-newsletter': {
          navbarOpts: false,
          countdownOpts: false,
          formsOpts: false,
          blocksBasicOpts: {
            blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3'],
            flexGrid: false,
            stylePrefix: 'lala-',
          },
        },
      },
    };

    return grapesjs.init(config);
  }
  // private initializeEditor(): any {
  //   console.dir(window);
  //   return grapesjs.init({
  //     container: '#gjs',
  //     autorender: true,
  //     forceClass: false,
  //     components: '',
  //     style: '',
  //     plugins: ['gjs-preset-newsletter', 'gjs-blocks-basic'],
  //     pluginsOpts: {
  //       'gjs-preset-newsletter': {
  //         navbarOpts: false,
  //         countdownOpts: false,
  //         formsOpts: false,
  //         blocksBasicOpts: {
  //           blocks: ['link-block', 'quote', 'image', 'video', 'text', 'column1', 'column2', 'column3'],
  //           flexGrid: false,
  //           stylePrefix: 'lala-'
  //         }
  //       }
  //     },

  //     canvas: {
  //       styles: [
  //         'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
  //         'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'
  //       ],
  //       scripts: ['https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js']
  //     }
  //   });
  // }
}


export interface GrapesjsConfig {
  container: string;
  canvas: {},
  styleManager: {},
  autorender?: boolean;
  forceClass?: boolean;
  components?: string;
  style?: string;
  plugins: string[];
  pluginsOpts?: {
    [pluginName: string]: { [optionName: string]: any };
  };
}
