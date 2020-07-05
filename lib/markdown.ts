import fs from 'fs'
import path from 'path'
import marked from 'marked'
import prismjs from 'prismjs'
import loadLanguages from 'prismjs/components/'

const dirMarkdownPath = path.join(process.cwd(), 'data/markdown')

export type FileNames = string[]
export type Paths = Array<{params: {id: string}}>

class Markdown {
  fileNames: FileNames
  paths: Paths
  
  constructor() {
    this.fileNames = fs.readdirSync(dirMarkdownPath)
    this.paths = this.fileNames.map(fileName => ({
      params: {
        id: path.parse(fileName).name,
      }
    }))
  }

  getContent(filename: string) {
    const content = fs.readFileSync(path.join(dirMarkdownPath, filename), 'utf-8')
    return marked(content, {
      highlight(code, lang){
        loadLanguages()
        return prismjs.highlight(code, prismjs.languages[lang], lang)
      }
    })
  }
}

export default new Markdown()
