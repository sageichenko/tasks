const list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printReverseList(list) {
	let lastItem = null;
	do {
		let it = list;
		while(it.next !== lastItem) {
            it = lastItem;
        }
        console.log(it.value);
        lastItem = it;
	} while(lastItem !== list)
}
printReverseList(list);