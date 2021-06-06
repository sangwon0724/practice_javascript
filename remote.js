//리모콘 작동
function move_section(event){
    var section_id = event.target.value;
    console.log(section_id);
    //location.href = "#" + section_id;
    document.getElementById("note_body").getElementById(section_id).scrollIntoView({behavior: 'smooth'});
}

document.getElementById("note_body").getElementById("remote_menu").addEventListener("change", move_section);