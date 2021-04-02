const createTask = (name, desc, endDate) => {
    let task = document.createElement('div');
    task.classList.add('task');
    let ip = document.createElement('input');
    ip.type = 'checkbox';
    ip.value = 't2';
    ip.name = name;
    ip.id = name;
    ip.classList.add('check-task');
    let label = document.createElement('label');
    label.for = name;
    label.textContent = name;
    //label.id = name;
    label.classList.add(name);
    let btn = document.createElement('button');
    btn.classList.add('expand');
    let btnIdStr = name+"-expand";
    btn.id = btnIdStr;
    btn.textContent = '+';
    let d = document.createElement('p');
    d.textContent = "End: "+endDate;
    let dpar = document.createElement('p');
    dpar.textContent = desc;
    dpar.classList.add("desc");
    dpar.classList.add(btnIdStr);
    task.append(ip, label, btn, d, dpar);

    return task;
}

export default createTask;