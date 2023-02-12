// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

//Input: list1 = [1,2,4], list2 = [1,3,4]
//Output: [1,1,2,3,4,4]

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let current = new ListNode();
    const head = current;
    while (list1.next || list2.next) {
        if (list1.val >= list2.val) {
            current.val = list1.val;
            current.next = new ListNode();
            current = current.next;
            list1 = list1.next;
        } else {
            current.val = list1.val;
            current.next = new ListNode();
            current = current.next;
            list1 = list1.next;
        }
    }
    return head;
};
