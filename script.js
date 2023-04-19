const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
	  
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    // inputs.forEach(input => input.addEventListener('change', handleUpdate));
    // inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
let isplaying = false
function play(){
	const vid = document.getElementById("vid");
	
	isplaying = !isplaying;
	if(isplaying)
		{document.getElementById("play-pause").value= '\u23f8'
		vid.play();
		}
	else
		{document.getElementById("play-pause").value= '\u23f5'
		vid.pause();
		}
	
}