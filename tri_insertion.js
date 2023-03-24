// tri d'insersion

tab = [5,12,23,9,7];

for (i=1; i<tab.length;i++) {
    Eactuel = tab[i];
    j=i;

    while(tab[j-1] > Eactuel && j>0){
        tab[j] = tab[j-1];
        j=j-1;
    }
    tab[j] = Eactuel;
}

console.table(tab);