num_list = []

def find_divisor(num):
    num_list.clear()
    for i in range(1, num+1):
        if num % i == 0:
            num_list.append(i)
    return num_list

while True:
    input_num = int(input())
    if input_num == -1:
        break
    list_sum = sum(find_divisor(input_num))
    if list_sum - input_num == input_num:
        dab = f"{input_num} = "
        for num in num_list:
            if num == input_num:
                break
            else:
                dab += str(num) + " + "
        print(dab[:-3])
    else:
        print(f"{input_num} is NOT perfect.")