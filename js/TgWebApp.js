Telegram.WebApp.ready();

function buyStars() {
    Telegram.WebApp.openInvoice({
        slug: 'your-invoice-slug', // ← заменишь здесь на настоящий slug из BotFather
        callback: function (status) {
            if (status === 'paid') {
                Telegram.WebApp.showAlert('Оплата прошла успешно!');
            } else {
                Telegram.WebApp.showAlert('Оплата не удалась или была отменена.');
            }
        }
    });
}
console.log(1);