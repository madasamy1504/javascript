let container = document.createElement('div'),
    head = document.createElement('div'),
    overHead = document.createElement('div'),
    run = document.createElement('div'),
    balls = document.createElement('div'),
    tRun = document.createElement('div'),
    overContent = document.createElement('span'),
    overValue = document.createElement('span'),
    runContent = document.createElement('span'),
    runValue = document.createElement('span'),
    firstBallValue = document.createElement('span'),
    secondBallValue = document.createElement('span'),
    thirdBallValue = document.createElement('span'),
    fourthBallValue = document.createElement('span'),
    fifthBallValue = document.createElement('span'),
    sixthBallValue = document.createElement('span'),
    totalRunContent = document.createElement('span'),
    totalRunValue = document.createElement('span');

    container.classList.add = 'container';
    head.classList.add = 'head';
    overValue.classList.add = 'overValue';
    run.classList.add = 'run';
    balls.classList.add = 'balls';
    tRun.classList.add = 'tRun';
    container.append(head);
    head.append(overHead);
    overHead.append(overContent);
    overHead.append();
    head.append(run);
    run.append(balls);
    run.append(runContent);
    run.append(runValue);
    head.append(tRun);
    

    runContent.append('RUN SCORED:');
    runContent.append('RUN SCORED:');
    runContent.append('RUN SCORED:');
    runContent.append('RUN SCORED:');
    runContent.append('RUN SCORED:');
    