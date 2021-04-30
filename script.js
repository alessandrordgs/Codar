const Constraste = {
    change(){
        document.getElementById("body").classList.add('active');
        document.querySelector('.contrast').classList.add('disableButton');
        document.querySelector('.constrastNormal').classList.add('contrastNormalEnable');
        document.querySelector('.commentsMain').classList.add('commentsBoxAcess');
        document.getElementById('footer').classList.add('footerAcess')
    },
    initial(){
        document.getElementById("body").classList.remove('active');
        document.querySelector('.contrast').classList.remove('disableButton');
        document.querySelector('.constrastNormal').classList.remove('contrastNormalEnable')
        document.querySelector('.commentsMain').classList.remove('commentsBoxAcess')
        document.getElementById('footer').classList.remove('footerAcess')
    }
}

const Audio = {
    playBullet(){
        document.getElementById("bulletPoint").play()
    },
    playPedro(){
        document.getElementById("audioPedro").play()
    },
    playMaria(){
        document.getElementById("audioMaria").play()
    }

}