
let boards = [];
let selectedIndex = -1;

function showCard() {
    // document.getElementById("card").classList.remove("d-none");
    // document.getElementById("card").classList.add("nimadir");

    document.getElementById("card").classList.toggle("d-none");
}

function addBoard() {
    let boardTitle = document.getElementById("board-title").value;

    if (boardTitle.length > 0){
        document.getElementById("board-title").value = "";
        let newBoard = {
            title: boardTitle,
            tasks: []
        }
        boards.push(newBoard);
    } else {
        alert("Ma'lumot kiriting!");
    }
    drawPage();
}

function drawPage() {
    let result = "";

    for (let i = 0; i < boards.length; i++){

        let result2 = "";
        for (let j = 0; j < boards[i].tasks.length; j++){
            result2 += "<div class='task' onclick='editToDo("+ i +","+ j +")'>"+ boards[i].tasks[j] +" <span class='task-close' onclick='deleteTask("+ i +", "+ j +")'>&times;</span></div>"
        }

        let result3 = "";
        result3 += "<div class='card'><span class='task-close' onclick='deleteCard("+ i +")'>&times;</span></div>"


        result +=
            "<div class='col-4 mb-3'>" +
            "<div class='card'>" +
            ""+ result3 +"" +
            "<div class='card-header'><h3 onclick='editName("+ i +")'>"+ boards[i].title +"</h3></div>" +
            "<div class='card-body'>"+ result2 +"</div>" +
            "<div class='card-footer'>" +
            "<textarea class='form-control' id='task-title"+ i +"' placeholder='Type here'></textarea>" +
            "<button type='button' class='btn btn-success ml-auto mt-3 d-block' onclick='addTask("+ i +")'>Add</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;
}

function addTask(index) {
    let taskTitles = document.getElementById("task-title" + index).value;
    boards[index].tasks.push(taskTitles);
    drawPage();
}

function deleteTask(index, index2) {
    boards[index].tasks.splice(index2, 1);
    drawPage();
}

function deleteCard(index) {
    boards.splice(index, 1);
    drawPage();
}

function editName(index) {
    document.getElementById("board-title").value = boards[index].title;

    selectedIndex = index;
}

function editToDo(index, index2) {
    document.getElementById("task-title" + index).value = boards[index].tasks[index2].value;
}