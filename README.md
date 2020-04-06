# Minesweeper

### Apribojimai:
- bent vienas langelis be bombos
- mažiausiai bombų: 1
- daugiausiai bombų: (MxN) - 1



### Lentos dydis:
- mažiausias: 2 x 1
- didžiausias: M x N



### Žaidimo logika:
- laikrodžio pradinė reikšmė: 0s
- max laikrožio reikšmį: 999s
- paspaudus ant langelio:
    - jei tai yra pirmas kartas:
      - sugeneruojame bombas  
    - atidaromas langelis
    - patikriname ar jame nėra bombos
        - jeigu yra: GAME OVER
        - jei nėra: skaišiuojame kiek aplinkui yra bombų
            - į atidarytą langelį įrašome suskaičiuotą kiekį
            - jeigu bombų nėra (kiekis 0), tai atidarinėjame sekančius aplinkinius langelius
            
PLAY --> [Here](https://teklithuania.github.io/11-minesweeper/index.html)
