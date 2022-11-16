const inventory = newInventory()
move(inventory).to(0, 0)


const character = newImage('assets/green-character/static.gif')

function handleDirectionChange(direction){
if(direction === null){
    character.src = 'assets/green-character/static.gif'
}
if(direction === 'west'){
    character.src = 'assets/green-character/west.gif'
}
if(direction === 'north'){
    character.src = 'assets/green-character/north.gif'
}
if(direction === 'east'){
    character.src = 'assets/green-character/east.gif'
}
if(direction === 'south'){
    character.src = 'assets/green-character/south.gif'
}
}

move(character).withArrowKeys(100, 250, handleDirectionChange)

function moveWithArrowKeys(left, bottom, callback){
    let direction = null;
    let x = left;
    let y = bottom;
    document.addEventListener('keydown', function(e){
        if(e.repeat) return;
    
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        callback(direction)
    })
    
    document.addEventListener('keyup', function(e){
        direction = null
        callback(direction)
    })
}    


setInterval(function() {
    if(direction === 'west'){
    x = x - 1
    }
    if(direction === 'north'){
    y = y + 1
    }
    if(direction === 'east'){
    x = x + 1
    }
    if(direction === 'south'){
    y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)

setInterval(moveCharacter, 1)     


document.addEventListener('keydown', function(e){ 
    if(e.repeat) return;               
    if(e.key === 'ArrowLeft'){
        direction = 'west'
    }
    if(e.key === 'ArrowUp'){
        direction = 'north'
    }
    if(e.key === 'ArrowRight'){
        direction = 'east'
    }
    if(e.key === 'ArrowDown'){
        direction = 'south'
    }
})


document.addEventListener('keyup', function(e){
    direction = null
})


move(newImage('assets/tree.png')).withArrowKeys(200, 450)
move(newImage('assets/pillar.png')).withArrowKeys(350, 250)
move(newImage('assets/pine-tree.png')).withArrowKeys(450, 350)
move(newImage('assets/crate.png')).withArrowKeys(150, 350)
move(newImage('assets/well.png')).withArrowKeys(500, 575)
move(newItem('assets/sword.png')).withArrowKeys(500, 555)
move(newItem('assets/shield.png')).withArrowKeys(165, 335)
move(newItem('assets/staff.png')).withArrowKeys(600, 250)