export class JapaneseWordExample {
  public source: string;
  public link: string;
  private _examples: string[];

  constructor(source: string, link: string) {
    this.source = source;
    this.link = link;
    this._examples = [];
  }

  public addExample(example: string): void {
    this._examples.push(example);
  }

  get examples(): readonly string[] {
    return this._examples;
  }
}