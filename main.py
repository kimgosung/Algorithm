input_test_num = int(input())

dict_list = {}


def find_key_from_dict(dict, search_val):
    return_value = [key for key, value in dict.items() if value == search_val]
    return return_value

while True:
    univ_num = int(input())
    for i in range(0, univ_num):
        univ_name, drink_num = input().split()
        dict_list[univ_name] = int(drink_num)
    all_value = dict_list.values()
    max_value = max(all_value)

    print(find_key_from_dict(dict_list, max_value)[0])

    input_test_num -= 1
    if input_test_num == 0:
        break
