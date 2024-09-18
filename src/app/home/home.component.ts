import { Component } from '@angular/core';
import { Character } from '../shared/models/character.model';
import { Encore } from '../shared/models/encore.model';
import { Sanhua } from '../shared/models/sanhua.model';
import { Util } from '../shared/utils/util.model';
import { Jinhsi } from '../shared/models/jinhsi.model';
import { Aalto } from '../shared/models/aalto.model';
import { Baizhi } from '../shared/models/baizhi.model';
import { Calcharo } from '../shared/models/calcharo.model';
import { Changli } from '../shared/models/changli.model';
import { Chixia } from '../shared/models/chixia.model';
import { Danjin } from '../shared/models/danjin.model';
import { Jianxin } from '../shared/models/jianxin.model';
import { Jiyan } from '../shared/models/jiyan.model';
import { Lingyang } from '../shared/models/lingyang.model';
import { Mortefi } from '../shared/models/mortefi.model';
import { RoverHavoc } from '../shared/models/roverh.model';
import { Rover } from '../shared/models/rover.model';
import { Taoqi } from '../shared/models/taoqi.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  characterList: any[] = [];
  characters: Array<Character> = new Array<Character>();
  currentSelection: string = '';

  constructor() {
    this.characterList = [
      new Aalto(), new Baizhi(), new Calcharo(), new Changli(),
      new Chixia(), new Danjin(), new Encore(), new Jianxin(),
      new Jinhsi(), new Jiyan(), new Lingyang(), new Mortefi(),
      new RoverHavoc(), new Rover(), new Sanhua(), new Taoqi()];
  }

  ngOnInit(): void {
    this.load();
  }

  createNew() {
    let char: Character;
    switch (this.currentSelection) {
      case 'aalto':
        const aal: Aalto = new Aalto();
        char = this.charCreation(aal);
        char.atk = true;
        break;
      case 'baizhi':
        const bai: Baizhi = new Baizhi();
        char = this.charCreation(bai);
        char.hp = true;
        char.heal = true;
        break;
      case 'calcharo':
        const cal: Calcharo = new Calcharo();
        char = this.charCreation(cal);
        char.atk = true;
        break;
      case 'changli':
        const cha: Changli = new Changli();
        char = this.charCreation(cha);
        char.atk = true;
        break;
      case 'chixia':
        const chi: Chixia = new Chixia();
        char = this.charCreation(chi);
        char.atk = true;
        break;
      case 'danjin':
        const dan: Danjin = new Danjin();
        char = this.charCreation(dan);
        char.atk = true;
        break;
      case 'encore':
        const enc: Encore = new Encore();
        char = this.charCreation(enc);
        char.atk = true;
        break;
      case 'jianxin':
        const jia: Jianxin = new Jianxin();
        char = this.charCreation(jia);
        char.atk = true;
        break;
      case 'jinhsi':
        const jin: Jinhsi = new Jinhsi();
        char = this.charCreation(jin);
        char.atk = true;
        break;
      default: break;
      case 'jiyan':
        const jiy: Jiyan = new Jiyan();
        char = this.charCreation(jiy);
        char.atk = true;
        break;
      case 'lingyang':
        const lin: Lingyang = new Lingyang();
        char = this.charCreation(lin);
        char.atk = true;
        break;
      case 'mortefi':
        const mor: Mortefi = new Mortefi();
        char = this.charCreation(mor);
        char.atk = true;
        break;
      case 'roverh':
        const roh: RoverHavoc = new RoverHavoc();
        char = this.charCreation(roh);
        char.atk = true;
        break;
      case 'rover':
        const rov: Rover = new Rover();
        char = this.charCreation(rov);
        char.atk = true;
        break;
      case 'sanhua':
        const san: Sanhua = new Sanhua();
        char = this.charCreation(san);
        char.atk = true;
        break;
      case 'taoqi':
        const tao: Taoqi = new Taoqi();
        char = this.charCreation(tao);
        char.def = true;
        char.atk = true;
    }
    this.characters.push(char);
    Util.characters = this.characters;
    this.currentSelection = '';

    this.save();
  }

  save() {
    if (Util.load()['autosave']) {
      Util.save(Util.characters, 'wuteringcalculator-chars');
    };
  }

  charCreation(char: any) {
    return new Character(this.characters.length, char);
  }

  load() {
    const load = Util.load('wuteringcalculator-chars');
    if (!load) {
      this.characters = new Array<Character>();
    } else {
      for (const c of load) {
        this.characters.push(Object.assign(new Character(0, null), c));
      }
      Util.characters = this.characters;
    }
  }

  audio(type: string) {
    const settings = Util.load();
    if (settings?.audio) {
      new Audio(`assets/sound/${type}.wav`).play();
    }
  }

  delete(index: number) {
    this.characters = this.characters.filter(c => c.index != index);
    for (let i = 0; i < this.characters.length; i++) {
      this.characters[i].index = i;
    }

    Util.characters = this.characters;
    this.save();
  }
}
