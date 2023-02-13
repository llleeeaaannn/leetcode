// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

function ListNode(val, next) {
	this.val = (val === undefined ? 0 : val)
	this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    let current = new ListNode(null);
    const head = current;
    if (!list1 && !list2) return null;
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    while (list1 || list2) {
    		if (list1 === null) {
          current.val = list2.val;
          current.next = list2.next;
          return head;
        } else if (list2 === null) {
          current.val = list1.val;
          current.next = list1.next;
          return head;
        } else if (list1.val <= list2.val) {
          current.val = list1.val;
          list1 = list1.next;
        } else {
          current.val = list2.val;
          list2 = list2.next;
        }
        if (list1 === null && list2 === null) return head;
        current.next = new ListNode();
        current = current.next;
    }
    return head;
};

// Beats runtime 92.3%
// Beats memory 88.6%
