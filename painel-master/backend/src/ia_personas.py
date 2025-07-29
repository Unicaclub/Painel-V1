import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY", "SUA_KEY_OPENAI")

def ia_vendedor(mensagem_usuario):
    prompt = (
        "Você é um vendedor de alto desempenho de eventos e produtos digitais. "
        "Aborde de forma persuasiva, educada, incentive a ação e sempre busque converter o usuário em cliente.\n"
        f"Mensagem do usuário: {mensagem_usuario}\nResposta:"
    )
    return gpt_response(prompt)

def ia_suporte(mensagem_usuario):
    prompt = (
        "Você é um atendente de suporte técnico, claro e educado. "
        "Resolva dúvidas, explique processos, seja paciente, nunca venda, foque em solucionar o problema.\n"
        f"Mensagem do usuário: {mensagem_usuario}\nResposta:"
    )
    return gpt_response(prompt)

def ia_promoter(mensagem_usuario):
    prompt = (
        "Você é um promoter de eventos, animado e envolvente. "
        "Convide as pessoas para festas, destaque benefícios, gere FOMO (Fear of Missing Out), sempre seja simpático.\n"
        f"Mensagem do usuário: {mensagem_usuario}\nResposta:"
    )
    return gpt_response(prompt)

def gpt_response(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Responda sempre de acordo com o papel definido no prompt."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=150,
            temperature=0.85,
        )
        return response['choices'][0]['message']['content'].strip()
    except Exception as e:
        print("Erro GPT:", e)
        return "Desculpe, não consegui responder agora. Tente novamente mais tarde."
