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
    label.id = name;
    let btn = document.createElement('button');
    btn.class = 'expand';
    btn.textContent = '+';
    let d = document.createElement('p');
    d.textContent = "End: "+endDate;
    let dpar = document.createElement('p');
    dpar.textContent = desc;

    task.append(ip, label, btn, d, dpar);

    return task;
}

export default createTask;