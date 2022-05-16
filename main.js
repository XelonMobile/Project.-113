function draw() {
    image(video, 0, 0, 640,480);
    tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}

function filter_tint()
{
  tint_color = document.getElemmentById("color_name").value;
}
