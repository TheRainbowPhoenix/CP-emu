ENTRY(_main);

SECTIONS {
	start_address = 0x8CFE6000;
	.init start_address : AT(start_address) {
		*(.init)
	}
	info_address = 0x8CFE6010;
	. = info_address;
	.hollyhock_name : {
		*(.hollyhock_name)
	}
	.hollyhock_description : {
		*(.hollyhock_description)
	}
	.hollyhock_author : {
		*(.hollyhock_author)
	}
	.hollyhock_version : {
		*(.hollyhock_version)
	}
	.text : {
		*(.text)
	}
}