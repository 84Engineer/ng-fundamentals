import { FormControl } from '@angular/forms';

export function restrictedWords(...words: string[]) {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) return null;
        let invalidWords = words.filter(w => control.value.includes(w));
        return invalidWords && invalidWords.length > 0 
            ? { restrictedWords: invalidWords.join(', ') } 
            : null;
    }
}