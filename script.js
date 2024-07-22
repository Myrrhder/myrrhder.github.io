let topics = [];
let pickedTopics = new Set();

function generateRandomTopic() {
    const topicItems = document.getElementById('topicItems').value.split(',').map(item => item.trim());
    topics = topicItems.filter(item => !pickedTopics.has(item));
    
    if (topics.length === 0) {
        alert('No more topics available. Please add more topics.');
        return;
    }

    const randomIndex = Math.floor(Math.random() * topics.length);
    const randomTopic = topics[randomIndex];

    document.getElementById('result').innerText = randomTopic;
}

function pickTopic() {
    const result = document.getElementById('result').innerText;
    if (result && !pickedTopics.has(result)) {
        pickedTopics.add(result);
        alert(`Topic "${result}" has been picked and cannot be reused.`);
        document.getElementById('result').innerText = '';
    } else {
        alert('Please generate a valid topic first.');
    }
}

function shareTopic() {
    const result = document.getElementById('result').innerText;
    if (result) {
        const shareURL = `${window.location.href}?topic=${encodeURIComponent(result)}`;
        navigator.clipboard.writeText(shareURL).then(() => {
            alert('Link copied to clipboard!');
        });
    } else {
        alert('Please generate a topic first.');
    }
}

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    if (topic) {
        document.getElementById('result').innerText = topic;
    }
};
