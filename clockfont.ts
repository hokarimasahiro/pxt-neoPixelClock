namespace clockfont{
    const clockFont=["7C828282827C00",
                     "000042FE020000",
                     "468A9292926200",
                     "44829292926C00", 
                     "1C244484FE0400", 
                     "E2A2A2A2A29C00", 
                     "1C325292920C00", 
                     "80808E90A0C000", 
                     "6C929292926C00", 
                     "60929294987000", 
                     "006C6C00", 
                     "00000000", 
                     "00000000000000"];
    const clockNum="0123456789:_ ";
    //% block="get clock strip data|%str"
    export function getClockStrip(str:string):string{
        let strip = ""
        for (let i = 0; i <= str.length - 1; i++) {
            let font_no = clockNum.indexOf(str.charAt(i))
            if (font_no >= 0) {
                strip = strip + clockFont[font_no]
            }
        }
        return strip;
    }
}