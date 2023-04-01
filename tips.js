// 获取输入框和发送按钮元素
const inputMessage = document.querySelector('input[name="message"]');
const sendBtn = document.querySelector("#submit");

// 给发送按钮添加点击事件监听器
sendBtn.addEventListener("click", () => {
	// 获取输入框中的文本信息
	const messageText = inputMessage.value;
	if (messageText === "") {
		return;
	}

	// 创建一个新的对话框消息元素
	const newMsg = document.createElement("div");
	newMsg.classList.add("direct-chat-msg");
	newMsg.classList.add("right");

	// 添加对话框消息的内容
	newMsg.innerHTML = `
    <div class="direct-chat-infos clearfix">
      <span class="direct-chat-name">User123</span>
    </div>
    <img class="direct-chat-img" src="./icon&pic/account.png" alt="message user image">
    <div class="direct-chat-text" style="text-align: right;">${messageText}</div>
  `;


	// 找到对话框消息容器并添加新的对话框消息元素
	const messagesContainer = document.querySelector(".direct-chat-messages");
	messagesContainer.appendChild(newMsg);
	messagesContainer.scrollTop = messagesContainer.scrollHeight;
});

// ChatGPT API接口

// 添加事件监听器
sendBtn.addEventListener('click', async (event) => {
	event.preventDefault();

	// 获取用户输入的文本消息
	const prompt = inputMessage.value;
	if (prompt === "") {
		return;
	}

	// 向GPT-3.5 API发送预测请求
	const response = await fetch('https://api.openai.com/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer sk-****' // 替换为您的GPT-3.5 API密钥
		},
		body: JSON.stringify({
			model: 'gpt-3.5-turbo',
			messages: [{ "role": "user", "content": `You are a garbage sorter living in Finland, and according to Finnish law, you need to sort the garbage into categories such as Bio, mixed, carton, paper, plastic, glass, metal, and other. Other categories include Hazardous waste, Electrical equipment and electronics, Returning bottles and cans, etc. If the following content includes daily-used items, which category it belongs to using the following format: the item you find: category., then add a blank line. then answer the content: ${prompt}` }],
			max_tokens: 50, // 最大返回的token数，文本长度
			temperature: 0.7 // 控制响应的创造性和多样性
		})
	});

	// 解析响应并显示回复
	const data = await response.json();
	if (data.choices && data.choices.length > 0) {
		const reply = data.choices[0].message.content;
		displayReply(reply);
	} else {
		displayReply("Sorry, I could not understand your message.");
	}
});

// 显示ChatGPT的回复
function displayReply(reply) {
	// 创建一个新的对话框消息元素
	const newMsg = document.createElement("div");
	newMsg.classList.add("direct-chat-msg");
	newMsg.classList.add("left");

	// 添加对话框消息的内容
	newMsg.innerHTML = `
		<div class="direct-chat-infos clearfix">
		  <span class="direct-chat-name float-left">ChatGPT</span>
		</div>
		<img class="direct-chat-img" src="./icon&pic/openai.svg" alt="ChatGPT">
		<div class="direct-chat-text float-left">${reply}</div>
	  `;
	// 清空对话框
	document.querySelector('input[name="message"]').value = "";
	// 找到对话框消息容器并添加新的对话框消息元素
	const messagesContainer = document.querySelector(".direct-chat-messages");
	messagesContainer.appendChild(newMsg);
	messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
