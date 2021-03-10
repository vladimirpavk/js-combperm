const stringAND = (par1, par2)=>{
    //par1 is a character i.e. 'a', 'e', 'A', 'F'
    //par 2 is a character only '0' or '1'
    if(par2 === '1') return par1
    else return '0';
}

const isEven = (element)=>{
    if((element/2 - Math.ceil(element/2))!=0) return false;
    else return true;
}

module.exports = {
    'stringAND': stringAND,
    'isEven': isEven
}